/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for importer
 */
export interface IImporter {
    dir: string
    filename: string
    name: string
    url: string
}

/**
 * Interface for importer state
 */
export interface IImporterState {
    importers: IImporter[]
}

/**
 * Initial value for importers
 */
export const initImporters: IImporterState = {
    importers: []
}
