import { join } from "path";

export const sassOptions = {
  includePaths: [join(__dirname, "styles")],
};
export const target = "serverless";
export const images = {
  domains: ["images.ctfassets.net"],
};
