import SortButton from '../../assets/sortButton/SortButton';
import s from './table.module.css';


const flats = [
    { discount: '-5%', number: 1, area: 50.17, rooms: 3, orientation: 'Pietūs', readiness: 'Pastatyta' },
    { discount: '-5%', number: 1, area: 60, rooms: 4, orientation: 'Rytai', readiness: 'Pastatyta' },
    { discount: '-', number: 2, area: 35.00, rooms: 2, orientation: 'Pietūs', readiness: 'Pastatyta' },
    { discount: '-10%', number: 1, area: 30.00, rooms: 1, orientation: 'Pietūs', readiness: 'Statoma' },
    { discount: '-', number: 1, area: 60.00, rooms: 4, orientation: 'Rytai', readiness: 'Pastatyta' },
    { discount: '-', number: 2, area: 35.00, rooms: 2, orientation: 'Pietūs', readiness: 'Pastatyta' },
    { discount: '-', number: 1, area: 50.17, rooms: 3, orientation: 'Pietūs', readiness: 'Statoma' },
    { discount: '-5%', number: 1, area: 60.00, rooms: 4, orientation: 'Rytai', readiness: 'Pastatyta' },
    { discount: '-5%', number: 2, area: 35.00, rooms: 2, orientation: 'Pietūs', readiness: 'Pastatyta' },
    { discount: '-5%', number: 1, area: 50.17, rooms: 3, orientation: 'Pietūs', readiness: 'Statoma' },
    { discount: '-10%', number: 1, area: 60.00, rooms: 4, orientation: 'Rytai', readiness: 'Statoma' },
    { discount: '-', number: 2, area: 35.00, rooms: 2, orientation: 'Pietūs', readiness: 'Pastatyta' },

];


const Table = () => {
    return (
        <section className={s.tableWrapper}>
            <div className={s.sortBtnRow}>
                <SortButton> <p>Plotas</p> </SortButton>
                <SortButton> <p>Kambarių skaičius</p></SortButton>
                <SortButton><p>Langų orientacija</p></SortButton>
                <SortButton><p>Baigtumas</p></SortButton>
            </div>
            <div className={s.tableNameRow}>
                <p>Nuolaida</p>
                <p>Namo nr.</p>
                <p>Plotas m2</p>
                <p>Kambarių <br></br>
                    skaičius</p>
                <p>Langų <br></br>
                    orientacija</p>
                <p>Baigtumas</p>
            </div>


            {flats.map((flat, index) => {
                return (
                    <div key={index} className={parseInt(flat.discount) < 0 ? s.dataTableDisc : s.dataTable}  >
                        {console.log(parseInt(flat.discount) < 0)}
                        <p>{flat.discount}</p>
                        <p>{flat.number}</p>
                        <p>{flat.area}</p>
                        <p>{flat.rooms}</p>
                        <p>{flat.orientation}</p>
                        <p>{flat.readiness}</p>
                    </div>
                );
            })}

        </section>

    )
}

export default Table;