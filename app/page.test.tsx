import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import Home from "./page";

expect.extend(toHaveNoViolations);

// Mock the next/link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock the Main component
jest.mock("./components", () => ({
  Main: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="main">{children}</div>
  ),
}));

describe("Home component", () => {
  describe("Functionality tests", () => {
    beforeEach(() => {
      render(<Home />);
    });

    it("renders the Main component", () => {
      expect(screen.getByTestId("main")).toBeInTheDocument();
    });

    it("renders the correct heading", () => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("Icaaq AB");
      expect(heading).toHaveAttribute("aria-label", "Isaac AB, I, C, A, A, Q");
    });

    it("renders the company description", () => {
      expect(
        screen.getByText(
          /A company founded and operated by Isak Lagerblad since 2018\./
        )
      ).toBeInTheDocument();
    });

    it("renders the description about Isak", () => {
      expect(
        screen.getByText(/Isak is a frontend developer and architect/)
      ).toBeInTheDocument();
      expect(screen.getByText(/20 years of experience/)).toBeInTheDocument();
    });

    it("renders the horizontal rule", () => {
      expect(screen.getByRole("separator")).toBeInTheDocument();
    });

    it("renders the open to opportunities text", () => {
      expect(
        screen.getByText(/I'm open to exploring new opportunities/)
      ).toBeInTheDocument();
    });

    it("renders the contact link", () => {
      const link = screen.getByRole("link", {
        name: /Here you can find my contact details\./,
      });
      expect(link).toHaveAttribute("href", "/contact");
    });
  });

  describe("Accessibility tests", () => {
    it("should have no accessibility violations", async () => {
      const { container } = render(<Home />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("ensures all images have alt text", () => {
      render(<Home />);
      const images = screen.queryAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
      });
    });

    it("ensures link has discernible text", () => {
      render(<Home />);
      const link = screen.getByRole("link", {
        name: /Here you can find my contact details\./,
      });
      expect(link).toHaveAccessibleName();
    });

    it("ensures color contrast is sufficient", async () => {
      const { container } = render(<Home />);
      const results = await axe(container, {
        rules: {
          "color-contrast": { enabled: true },
        },
      });
      expect(results).toHaveNoViolations();
    });
  });
});
