import styles from './styles.module.sass'

interface LineDividerProps {
	dividerText?: string
}
const LineDivider = ({ dividerText }: LineDividerProps) => {
	return (
		<div className={styles.LineDivider}>
			{dividerText ? (
				<>
					<hr className={styles.LineDivider__line} />
					<span className={styles.LineDivider__text}>{dividerText}</span>
					<hr className={styles.LineDivider__line} />
				</>
			) : (
				<hr className={styles.LineDivider__line__fit} />
			)}
		</div>
	)
}

export default LineDivider
