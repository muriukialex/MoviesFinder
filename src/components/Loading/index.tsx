import React, { useMemo } from 'react'
import cs from 'classnames'
import styles from './styles.module.sass'

interface LoadingScreenProps {
	variant: 'rect' | 'text'
	className?: string
	width: string
	height: string
}

const LoadingScreen = ({ variant, className, width = '', height = '' }: LoadingScreenProps) => {
	const cx = cs(styles.LoadingScreenContainer, className, {
		[styles.LoadingScreenContainer__rect]: variant === 'rect',
		[styles.LoadingScreenContainer__text]: variant === 'text',
	})
	const style = useMemo(() => ({ width, height }), [width, height])
	return <div style={style} className={cx}></div>
}

/*
Usage 
eg. 

<LoadingScreen variant='rect' width='30rem' height='30rem' />

*/

export default LoadingScreen
