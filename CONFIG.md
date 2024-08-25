# Configure necessary credentials once you are ready for release

1. Generate a Granular Access Token on [npmjs.com](https://www.npmjs.com/) ![NPM_TOKEN](./arts/generate-access-token-npmjs.png)
2. Configure in your repository's secret variables
    1. Individual level ![Individual](./arts/create-secret-variable-for-individual.png)
    2. Organization level to share across repositories on-demand ![Organization](./arts/create-secret-variable-for-organization.png)
3. Grant `Read and write permissions` to allow Github Actions publish | update github package ![Grant](./arts/grant-github-actions-read-and-write-permissions.png)
