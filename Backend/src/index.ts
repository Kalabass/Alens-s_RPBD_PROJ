import app from "./App"
import { AppDataSource } from "./db/data-source"
import { Bus } from "./entities/Bus";
import { Category } from "./entities/Category";
import { Driver } from "./entities/Driver";
import { Flight } from "./entities/flight";

AppDataSource.initialize().then(async () => {
    const port = 8975;

    const categoryRepository = AppDataSource.getRepository(Category);
    const driverRepository = AppDataSource.getRepository(Driver);
    const busRepository = AppDataSource.getRepository(Bus);
    const flightRepository = AppDataSource.getRepository(Flight);

    let count = await categoryRepository.count();

    if(count === 0){
        let categories: Category[] = [
            new Category(1, 'D'), 
            new Category(2, 'D1'), 
            new Category(3, 'DE'), 
            new Category(4, 'DE1')
        ];

        categories.forEach( async (cat) => {
            await categoryRepository.save(cat);
        })
    }

    app.listen(port, ()=> {console.log('serv workin on - ' + port)})
}).catch(error => console.log(error))
