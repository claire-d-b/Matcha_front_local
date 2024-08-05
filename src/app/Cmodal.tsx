import React from 'react'
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CprofileEdit from './CprofileEdit'


interface ComponentProps {
    className?: string
    open: boolean
    onClose: () => void
}

const _: React.FC<ComponentProps> = ({ className, open, onClose }) => {
    return (
    <Modal className={className} open={open}>
        <div className="w-full">
            <div className="flex self-center">
                <div className="w-0 md:w-1/4"></div>
                <div className="flex flex-col rounded-lg bg-gray-800 p-2 md:p-8 w-full md:w-1/2">
                    <IconButton className="self-end text-white bg-gray-800" size="small" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <CprofileEdit />
                </div>
                <div className="w-0 md:w-1/4"></div>
            </div>
        </div>
    </Modal>
    )
}

export default _