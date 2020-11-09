export interface IDatabase<T>
{
    /**
     * Método para guardar un elemento en DB de Firebase
     * @param elemento Elemento de tipo T
     */
    crear(elemento: T): Promise<any>;

    /**
     * Método para actualizar un elemento en DB de Firebase
     * @param elemento Elemento de tipo T
     */
    actualizar(elemento: T): Promise<any>;

    /**
     * Método para leer todos los elementos de tipo T de DB de Firebase
     */
    leer(): Promise<T[]>;

    /**
     * Método para borrar de forma física elemento de tipo T de DB de Firebase
     * @param elemento 
     */
    borrar(elemento: T): Promise<any>;

    /**
     * Método para leer por ID un elemento de tipo T de DB de Firebase
     * @param id 
     */
    leerPorId(id: string): Promise<T>;


}