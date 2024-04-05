import { ChildPros } from '@/types'
import Navbar from './(home)/_components/navbar'

const Layout = ({ children }: ChildPros) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
