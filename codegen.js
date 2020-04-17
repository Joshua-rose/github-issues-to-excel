const {generate} = require('@graphql-codegen/cli');
require('dotenv').config();

async function makeTheFile() {
  const generatedFiles = await generate({
    overwrite: true,
    schema: [
      {
        'https://api.github.com/graphql': {
          headers: {
            Authorization: `bearer ${process.env.GitHubToken}`,
          },
        },
      },
    ],
    documents: './src/components/**/*.{ts,tsx}',
    generates: {
      'src/generated/graphql.tsx': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo',
        ],
        config: {
          withHooks: true,
        },
      },
    },
  }, true);
}
makeTheFile();
