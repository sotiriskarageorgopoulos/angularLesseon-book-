export class Product{
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number
    ){} //The question marks (the ? characters) that follow the parameter names indicate that 
       //these are optional parameters that can be omitted when creating new objects using the Product class
}