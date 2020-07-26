import * as path from "path";
import {promises as fs } from 'fs';
import * as TJS from "typescript-json-schema";

const MODELS_DIR = './models/index.ts';
const SCHEMAS_DIR = './schemas';
const EXTRA_PROPS = true;

const settings: TJS.PartialArgs = {
    titles: true,
    required: true,
    strictNullChecks: true,
    defaultProps: true,
    noExtraProps: EXTRA_PROPS
};

const createOutputDir = async (): Promise<void> => {
    await fs.rmdir(SCHEMAS_DIR, { recursive: true });
    await fs.mkdir(SCHEMAS_DIR)
    console.log(`Output dir ${SCHEMAS_DIR} created`);
};

const saveSchema = (schemaName: string, generator: TJS.JsonSchemaGenerator): Promise<void> => {
    return fs.writeFile(`${SCHEMAS_DIR}/${schemaName}.json`, JSON.stringify(generator.getSchemaForSymbol(schemaName)));
};

const main = async (): Promise<void> => {
    const program = TJS.getProgramFromFiles(
        [MODELS_DIR]);
    const generator = TJS.buildGenerator(program, settings);
    const schemaNames = generator.getMainFileSymbols(program);
    await createOutputDir();
    const schemaPromises = schemaNames.map((schemaName) => (
        saveSchema(schemaName, generator)
    ));
    await Promise.all(schemaPromises);
    console.log('Successful update of schemas!')
};

main()