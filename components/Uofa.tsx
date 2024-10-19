import { useTheme } from "next-themes";

export const Uofa():any => {
  const lightColor = "#275d38"; // Color for light theme
  const darkColor = "#fff"; // Color for dark theme
  const theme = useTheme().resolvedTheme;

  return (
    <div className="w-2.5 h-2.5 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 274.63">
        <g id="icon" fill={theme === "dark" ? darkColor : lightColor}>
          <path d="m144 32.53-2.25-.91a47.82 47.82 0 0 0-17.52-3.1A48.41 48.41 0 0 0 108 31.17a48.41 48.41 0 0 0-16.18-2.65 47.82 47.82 0 0 0-17.52 3.1l-2.25.91v5h-5.63v39h83.16v-39H144Zm-39.6 34.84a53.5 53.5 0 0 0-25.16 0V37.5a46.35 46.35 0 0 1 25.16 0Zm32.36 0a53.5 53.5 0 0 0-25.16 0V37.5a46.35 46.35 0 0 1 25.16 0Z" />
          <path d="m206.2 21-3-1.44C175.84 6.21 145.59 0 108 0S40.17 6.21 12.78 19.54L9.82 21 0 25.75v112.71c0 18.85 4 66.15 41.09 98.22 28.09 24.26 56.44 34.37 59.58 35.45 0 0 6.83 2.5 7.34 2.5s7.35-2.5 7.35-2.5c3.14-1.07 31.45-11.18 59.56-35.44C212 204.61 216 157.31 216 138.46V25.77ZM77.8 235.07l-4.13 4.13c-3.4-2.17-6.94-4.58-10.54-7.23L74 221.15l3.8 3.85Zm0-28-6.38 6.39-8.89 8.88-8.88-8.88-6.39-6.46v-10l3.85-3.85 11.42 11.42L74 193.11l3.8 3.89Zm0-28-15.27 15.2L47.26 179v-10.07l3.85-3.85 11.42 11.43L74 165.08l3.84 3.85Zm45.47 56.07-6.39 6.38-8.88 8.82-8.88-8.89-6.39-6.38V225l3.85-3.84L108 232.57l11.42-11.42 3.85 3.84Zm0-28-6.39 6.39-8.88 8.77-8.88-8.88-6.39-6.42v-10l3.85-3.85L108 204.53l11.42-11.42 3.85 3.85Zm0-28L108 194.27 92.73 179v-10.07l3.85-3.85L108 176.51l11.42-11.43 3.85 3.85Zm14.93 56.07V225l3.84-3.84L152.87 232c-3.6 2.65-7.13 5.05-10.54 7.22Zm30.54-28-6.39 6.39-8.88 8.88-8.89-8.88-6.38-6.6v-10l3.84-3.85 11.43 11.42 11.42-11.42 3.85 3.85Zm0-28-15.27 15.27L138.2 179v-10.07l3.84-3.85 11.43 11.43 11.42-11.43 3.85 3.85Zm28.77-24a39.66 39.66 0 0 1-14.66-4.76 24.44 24.44 0 0 0-24.24 0 39.31 39.31 0 0 1-38.49 0 24.44 24.44 0 0 0-24.24 0 39.31 39.31 0 0 1-38.49 0 24.44 24.44 0 0 0-24.24 0A39.66 39.66 0 0 1 18.49 155a135.58 135.58 0 0 1-1-14.61 25.21 25.21 0 0 0 8.56-3 39.33 39.33 0 0 1 38.5 0 24.42 24.42 0 0 0 24.23 0 39.33 39.33 0 0 1 38.5 0 24.42 24.42 0 0 0 24.23 0 39.33 39.33 0 0 1 38.5 0 25 25 0 0 0 8.56 2.94 135.57 135.57 0 0 1-1.06 14.67Zm1.05-29.11-27.29-28.03L145.56 124 108 85.38 70.44 124 44.73 98.07 17.44 125.9V36.67l3-1.44C45.34 23.09 73.17 17.44 108 17.44s62.66 5.65 87.58 17.79l3 1.44Z" />
        </g>
      </svg>
    </div>
  );
};
export default Uofa;