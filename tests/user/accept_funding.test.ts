import { createClient } from "@/utils/supabase/client";
import { handleRequestLoan } from "@/pm_functions/request_loan";
import { loan_types } from "@/enums";

jest.mock("@/utils/supabase/client");
jest.mock("@/services/server_side/sign_in");

describe("acceptFunding", () => {
  const mockRouter = { push: jest.fn() } as any;
  const mockSetIsLoading = jest.fn();
  const mockPreventDefault = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    global.alert = jest.fn();
  });

  test("should redirect user to dashboard after accepting a funding offer", async () => {
    // mock Supabase client + responses
    const mockSupabase = {
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: { id: "123" } } }),
      },
      from: jest.fn().mockReturnValue({
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({ error: null }),
      }),
    };
    (createClient as jest.Mock).mockReturnValue(mockSupabase);

    // call the function
    const res = await handleRequestLoan(
      "A test loan",
      "A test description",
      450,
      loan_types.RQT,
      mockRouter,
      mockSetIsLoading,
      "a test alias here"
    );

    // assertions
    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(mockSupabase.from).toHaveBeenCalledWith("loans");
    expect(mockRouter.push).toHaveBeenCalledWith("/dash");
  });
});
