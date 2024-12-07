import { Modal } from 'antd'
import React from 'react'

const CustomModal = ({ children, title, open, onOk, onCancel, className, footer }) => {
    return (
        <div>
            <Modal
                title={title}
                centered
                open={open}
                onOk={onOk}
                onCancel={onCancel}
                className={`${className}`}
                footer={footer}
            >
                <>

                    {children}
                </>
            </Modal>
        </div>
    )
}

export default CustomModal
