import React, { useState } from 'react'
import { View, Text } from 'react-native'

const useToggle = () => {
    const [showPassword,setShowPassword] = useState(true);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return({showPassword,togglePassword})
}

export default useToggle
