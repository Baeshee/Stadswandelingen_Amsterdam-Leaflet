import React, {useState, useEffect} from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./raised_shadow";
import { ReorderIcon } from "./drag_icon";

import '../styles/css/item.css'

const Item = ({ item }) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    const dragControls = useDragControls();
  
    return (
      <Reorder.Item
        value={item}
        id={item}
        style={{ boxShadow, y }}
        dragListener={false}
        dragControls={dragControls}
        className="item"
      >
        <span>{item.name}</span>

        <ReorderIcon dragControls={dragControls} />

      </Reorder.Item>
    );
  };


export const DragList = ({lc, update}) => {
    const [items, setItems] = useState(lc)

    const updateValue = () => {
        update(items)
    }

    useEffect(() => {
        updateValue();
    })
    
    return (
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item, i) => (
            <Item key={i} item={item}/>
        ))}
      </Reorder.Group>
    )
  }


