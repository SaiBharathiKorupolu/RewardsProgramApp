import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import fetchRewardsData from "./api";

jest.mock("./api");

describe("App Component", () => {
  test("Should display loading state initially", () => {
    fetchRewardsData.mockImplementation(() => new Promise(() => {})); // Simulate pending promise
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("Should render data after successful fetch", async () => {
    // Mocked data
    fetchRewardsData.mockResolvedValue([
      {
        transactionId: "1",
        customerName: "Customer1",
        transactionDate: "01/11/2023",
        productPurchased: "Product1",
        amountSpent: 120,
      },
    ]);

    render(<App />);

    await (() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/customer1/i)).toBeInTheDocument();
    });
  });

  test("Should display error message on fetch failure", async () => {
    fetchRewardsData.mockRejectedValue(new Error("Fetch error")); // Simulate fetch failure

    render(<App />);

    await waitFor(() => {
      // Check that the error message is displayed
      expect(
        screen.getByText(
          /failed to fetch transactions. please try again later./i
        )
      ).toBeInTheDocument();
    });
  });
});
