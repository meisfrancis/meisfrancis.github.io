import { load } from 'js-yaml';

/**
 * Load and parse YAML content from a file in the databases directory
 * @param fileName - The name of the YAML file without the .yaml extension
 * @returns The parsed YAML content as a JavaScript object
 */
export async function loadYamlFile<T>(fileName: string): Promise<T> {
  try {
    // Fetch the YAML file from the databases directory
    const response = await fetch(`/databases/${fileName}.yaml`);
    
    if (!response.ok) {
      throw new Error(`Failed to load YAML file: ${fileName}.yaml`);
    }
    
    // Get the YAML content as text
    const yamlContent = await response.text();
    
    // Parse the YAML content
    const parsedContent = load(yamlContent) as T;
    
    return parsedContent;
  } catch (error) {
    console.error(`Error loading YAML file ${fileName}.yaml:`, error);
    throw error;
  }
}