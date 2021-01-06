import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailTicketRoomByIdShowTimeApiAction } from '../../redux/actions/ManageFilmReducerActions';

export default function TicketRoom(props) {

    // console.log(props);

    const { detailTicketRoom } = useSelector((state) => state.StateManageFilm);

    console.log("detailTicket", detailTicketRoom);

    const dispatch = useDispatch();

    useEffect(() => {
        
        const maLichChieu = props.match.params.maLichChieu;

        const fetchDataDetailTicketRoom = async () => {
            dispatch(await getDetailTicketRoomByIdShowTimeApiAction(maLichChieu));
        }

        fetchDataDetailTicketRoom();

    }, []);


    return (
        <div>
                Ticket Room!
        </div>
    )
}
