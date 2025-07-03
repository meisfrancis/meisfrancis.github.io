# meisfrancis.github.io
# Portfolio Website with YAML Content Management

This project is a portfolio website that uses YAML files as a database for text content. All text styling is defined inside the YAML files, and a coding font family is used throughout the project.

## Project Structure

- `/databases`: Contains YAML files that store text content for the components
- `/src/components`: Contains React components that render the content from YAML files
- `/src/utils`: Contains utility functions for loading and parsing YAML files
- `/src/types`: Contains TypeScript type definitions for the YAML data structures

## YAML Content Management

The project uses YAML files as a database for text content. Each component has its own YAML file in the `/databases` directory:

- `home.yaml`: Content for the HomeTab component
- `navigation.yaml`: Content for the Navigation component
- `blogs.yaml`: Content for the BlogsTab component
- `knowledge.yaml`: Content for the KnowledgeTab component
- `links.yaml`: Content for the LinksTab component

## How It Works

1. YAML files are loaded using the `loadYamlFile` utility function in `/src/utils/yamlLoader.ts`
2. Components use React hooks to fetch and display the content from YAML files
3. TypeScript interfaces in `/src/types/yaml.ts` provide type safety for the YAML data
4. The global font family is set to a monospace (coding) font in the Tailwind CSS configuration

## Development

To start the development server:

```bash
npm run dev
```

This will copy the YAML files to the public directory and start the development server.

## Building for Production

To build the project for production:

```bash
npm run build
```

This will build the project and copy the YAML files to the dist directory.

## Adding or Modifying Content

To add or modify content, simply edit the YAML files in the `/databases` directory. The changes will be reflected in the application after restarting the development server or rebuilding the project.

## Dependencies

- React
- TypeScript
- Tailwind CSS
- js-yaml: For parsing YAML files
