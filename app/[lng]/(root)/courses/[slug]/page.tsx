import TopBar from '@/components/shared/top-bar'
import Descriptionn from '../_components/descriptionn'
import Hero from '../_components/hero'
import Overview from '../_components/overview'
function Page() {
	return (
		<>
			<TopBar label='allCourses' extra='Full Courses ReactJS' />

			<div className='container mx-auto max-w-6xl'>
				<div className='grid grid-cols-3 gap-4 pt-12'>
					<div className='col-span-2 max-lg:col-span-3'>
						<Hero />
						<Overview />
					</div>
					<div className='col-span-1 max-lg:col-span-3'>
						<Descriptionn />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
