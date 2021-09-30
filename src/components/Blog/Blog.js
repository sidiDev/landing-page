import { Link } from 'react-router-dom'
import data from '../../data.json'

export default () => {

    
    return (
        <>
            {

            data.map((items, key) => {
                return (
                    <article className="mt-4 shadow-lg border rounded-md transition duration-300 hover:shadow-sm" key={key}>
                        <Link to="#">
                            <img src={`/images/${items.img}`} loading="lazy" alt={items.title}  className="w-full h-48 rounded-tl-md rounded-tr-md" />
                            <div className="pt-3 ml-6 mr-2">
                                <p className="text-xl text-gray-900">
                                    {items.title}
                                </p>
                                <p className="text-gray-400 text-sm sm:h-20 mt-1">{items.description}</p>
                            </div>
                            <div className="flex items-center space-x-3 mt-2 pt-3 pb-2 ml-4 mr-2">
                                <div className="w-14 h-14 rounded-full">
                                    <img src={'/images/'+items.createdLogo} className="w-14 h-14 rounded-full" alt={items.cratedName} />
                                </div>
                                <div>
                                    <span className="block text-gray-900">{items.cratedName}</span>
                                    <span className="block text-gray-400 text-sm">{items.date}</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                )
            })
            }
        </>
    )
}