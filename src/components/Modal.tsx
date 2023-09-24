import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
	children: ReactNode
	onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 flex items-center justify-center z-50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.div
					className="fixed inset-0"
					onClick={onClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className="absolute inset-0 bg-black opacity-40"></div>
				</motion.div>
				<motion.div
					className="bg-white p-4 m-8 rounded-xl z-50 relative overflow-y-auto"
					style={{ maxHeight: "80vh" }}
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
				>
					<button
						className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
						onClick={onClose}
					>
						Close
					</button>
					<div className="mt-4">{children}</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Modal
