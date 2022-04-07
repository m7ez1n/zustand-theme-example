import create from "zustand";

type ThemeHookProps = {
  selectedTheme: "dark" | "light";
  setSelectedTheme: () => void;
};

const useTheme = create<ThemeHookProps>((set) => ({
  selectedTheme: "dark",
  setSelectedTheme: () =>
    set(({ selectedTheme }) => ({
      selectedTheme: selectedTheme === "light" ? "dark" : "light",
    })),
}));

export default useTheme;
