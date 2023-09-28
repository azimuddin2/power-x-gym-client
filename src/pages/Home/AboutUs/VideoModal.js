import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import gymVideo from '../../../assets/Videos/gym.mp4'

const VideoModal = () => {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    return (
        <div>
            <BsPlayCircleFill
                onClick={() => props.setOpenModal('default')}
                className=' cursor-pointer mx-auto text-5xl text-center text-primary bg-neutral rounded-full'
            ></BsPlayCircleFill>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                   
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VideoModal;