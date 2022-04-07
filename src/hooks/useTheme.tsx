import create from "zustand";

type ThemeHookProps = {
  selectedTheme: "dark" | "light";
  toggleTheme: () => void;
};

const useTheme = create<ThemeHookProps>((set) => ({
  selectedTheme: "dark",
  toggleTheme: () =>
    set(({ selectedTheme }) => ({
      selectedTheme: selectedTheme === "light" ? "dark" : "light",
    })),
}));

export default useTheme;
