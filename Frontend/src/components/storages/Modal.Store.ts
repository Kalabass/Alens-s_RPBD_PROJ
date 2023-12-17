import {create} from 'zustand';
import { devtools} from 'zustand/middleware';

interface IAccessModalState {
    isShown: boolean
    setIsShown: (isShown:boolean) => void
}

export const useModalStore = create<IAccessModalState>()(
    devtools(
        (set) => ({
            isShown: false,
            setIsShown: (isShown) => set({ isShown }),
        }),
        {name: 'Modal'}
    )
)