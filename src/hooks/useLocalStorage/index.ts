import { useState, useEffect } from 'react'

type StoredValue<T> = T | null

function useLocalStorage<T>(key: string, initialValue: T): [StoredValue<T>, (value: T) => void] {
	const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
		try {
			const item = localStorage?.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(`Error retrieving value from local storage: ${error}`)
			return initialValue
		}
	})

	useEffect(() => {
		// Update the stored value in local storage whenever it changes
		try {
			localStorage.setItem(key, JSON.stringify(storedValue))
		} catch (error) {
			console.error(`Error storing value in local storage: ${error}`)
		}
	}, [key, storedValue])

	// Function to update the stored value
	const updateStoredValue = (value: T) => {
		return setStoredValue(value)
	}

	return [storedValue, updateStoredValue]
}

export default useLocalStorage
