import { signInSubmit } from "@/services/client_side/on_submit/sign_in_form";
import { createClient } from "@/utils/supabase/client";
import { handleSignIn } from "@/services/server_side/sign_in";

jest.mock("@/utils/supabase/client");
jest.mock("@/services/server_side/sign_in");

describe("signInSubmit", () => {
  const mockRouter = { push: jest.fn() } as any;
  const mockPreventDefault = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should redirect to /dash if user is onboarded", async () => {
    // mock Supabase client + responses
    const mockSupabase = {
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: { id: "123" } } }),
      },
      from: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest
          .fn()
          .mockResolvedValue({ data: [{ is_onboarded: true }], error: null }),
      }),
    };
    (createClient as jest.Mock).mockReturnValue(mockSupabase);
    (handleSignIn as jest.Mock).mockResolvedValue({ error: null });

    // call the function
    const res = await signInSubmit(
      { preventDefault: mockPreventDefault } as any,
      "test@gmail.com",
      "password123",
      mockRouter
    );

    // assertions
    expect(handleSignIn).toHaveBeenCalledWith("test@gmail.com", "password123");
    expect(mockRouter.push).toHaveBeenCalledWith("/dash");
    expect(res?.status_code).toBe(200);
  });
});
