export interface PortfolioProps {
	activePage: string
}

export interface PresentationProps {
	onClick: (page: number) => void
	activePageIndex?: number
}
