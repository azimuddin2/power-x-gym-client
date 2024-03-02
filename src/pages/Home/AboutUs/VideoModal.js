import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import gymVideo from '../../../assets/Videos/gym.mp4';

const VideoModal = () => {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    return (
        <div>
            <BsPlayCircleFill
                onClick={() => props.setOpenModal('dismissible')}
                className='cursor-pointer animate-pulse mx-auto text-5xl text-center text-primary bg-neutral rounded-full'
            ></BsPlayCircleFill>
            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header className='py-2 border-none'></Modal.Header>
                <Modal.Body className='pt-0'>
                    <video className="w-full" controls>
                        <source src={gymVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VideoModal;