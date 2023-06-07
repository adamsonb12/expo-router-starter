import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://stg.api.swyf.app/graphql",
  documents: [
    "./app/**/*.tsx",
    "./components/**/*.tsx",
    "./providers/**/*.tsx",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./types/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
