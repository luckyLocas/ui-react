/**
 * 设置主题
 */
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './index.less'

function SketchExample() {
  const [curColor, setCurColor] = useState('#1890ff')
  const [showColor, setShowCurColor] = useState(false)

  //更换主题颜色
  function handleChangeComplete(color: { hex: string }) {
    console.log('color', color)
    setCurColor(color.hex);
    console.log('color.hex', color.hex);
    (window as any).less.modifyVars(
      {
        '@primary-color': `${color.hex}!important`,
        '@btn-primary-bg': `${color.hex}!important`,
        '@new-bg': `${color.hex}!important`,
      }
    ).then(() => { console.log('success') })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <div className='colorContainer'>
      <div className='colorRender' onClick={() => { setShowCurColor(!showColor) }} style={{ backgroundColor: curColor }} />
      <div className='colorBox' style={{ display: showColor ? 'block' : 'none' }}>
        <ChromePicker
          color={curColor}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  )
}

export default SketchExample