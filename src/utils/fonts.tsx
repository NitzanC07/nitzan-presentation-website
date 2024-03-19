import { Varela_Round } from "next/font/google"

const varela_round_init = Varela_Round({
  weight: "400",
  subsets: ["hebrew", "latin"],
  variable: "--font-varela_round",
});

export const varela_round = varela_round_init.className;
export const varela_round_var = varela_round_init.variable;