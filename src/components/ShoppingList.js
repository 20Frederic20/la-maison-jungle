import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import '../styles/plantItem.css'
import CareScale from '../components/CareScale'
import cover from '../assets/monstera.jpg'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
            </ul>
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'  onClick={() => handleClick(plant.name)}>
                        {/* <img className='lmj-plant-item-cover' src={cover} alt={`${plant.name} cover`} /> */}
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <div>
                            <CareScale careType='water' scaleValue={plant.water} />
                            <CareScale careType='light' scaleValue={plant.light} />
                        </div>
					</li>
				))}
			</ul>
        </div>
    )
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default ShoppingList