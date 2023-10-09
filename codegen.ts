import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.stateaffairs.com/graphql",
  documents: ["src/**/*.tsx", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
