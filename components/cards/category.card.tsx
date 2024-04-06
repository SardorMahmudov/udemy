import { ICategory } from '@/types'
import Image from 'next/image'

const CategoryCard = (category: ICategory) => {
	return (
		<div>
			<div className='flex h-44 w-full items-center rounded-md bg-secondary'>
				<Image
					src={category.icon}
					alt={category.label}
					width={100}
					height={100}
				/>
				<h2 className='mt-2 line-clamp-1 font-space-grotesk text-lg'>
					{category.label}
				</h2>
			</div>
		</div>
	)
}

export default CategoryCard
