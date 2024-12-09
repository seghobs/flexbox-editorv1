import React, { useState } from 'react';
import { DirectionControl } from './controls/DirectionControl';
import { JustifyControl } from './controls/JustifyControl';
import { AlignControl } from './controls/AlignControl';
import { WrapControl } from './controls/WrapControl';
import { BoxSizeControl } from './controls/BoxSizeControl';
import { BoxContentControl } from './controls/BoxContentControl';
import { FlexBox } from './FlexBox';
import { CodePreview } from './CodePreview';
import { BoxSize, BoxContent, FlexProps } from '../types/flex';

export function FlexDemo() {
  const [flexProps, setFlexProps] = useState<FlexProps>({
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    wrap: 'nowrap',
    gap: { value: 8, unit: 'px' },
  });

  const [boxCount, setBoxCount] = useState(4);
  const [boxWidth, setBoxWidth] = useState<BoxSize>({ value: 100, unit: 'px' });
  const [boxHeight, setBoxHeight] = useState<BoxSize>({ value: 100, unit: 'px' });
  const [boxContent, setBoxContent] = useState<BoxContent>({
    type: 'text',
    content: '',
  });

  const generateCss = () => {
    return `.flex-container {
  display: flex;
  flex-direction: ${flexProps.direction};
  justify-content: ${flexProps.justify};
  align-items: ${flexProps.align};
  flex-wrap: ${flexProps.wrap};
  gap: ${flexProps.gap.value}${flexProps.gap.unit};
  padding: 1.5rem;
  background-color: rgb(243 244 246);
  border: 2px dashed rgb(209 213 219);
  border-radius: 0.5rem;
  min-height: 400px;
}

.flex-item {
  width: ${boxWidth.value}${boxWidth.unit};
  height: ${boxHeight.value}${boxHeight.unit};
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  transition: all 300ms;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.flex-item:nth-child(even) {
  background-color: rgb(168 85 247);
}

.flex-item:nth-child(odd) {
  background-color: rgb(59 130 246);
}

.flex-item:hover {
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`;
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DirectionControl
          value={flexProps.direction}
          onChange={(direction) => setFlexProps({ ...flexProps, direction })}
        />
        <JustifyControl
          value={flexProps.justify}
          onChange={(justify) => setFlexProps({ ...flexProps, justify })}
        />
        <AlignControl
          value={flexProps.align}
          onChange={(align) => setFlexProps({ ...flexProps, align })}
        />
        <WrapControl
          value={flexProps.wrap}
          onChange={(wrap) => setFlexProps({ ...flexProps, wrap })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Kutu Sayısı: {boxCount}
          </label>
          <input
            type="range"
            min="1"
            max="12"
            value={boxCount}
            onChange={(e) => setBoxCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <BoxContentControl content={boxContent} onChange={setBoxContent} />
      </div>

      <BoxSizeControl
        width={boxWidth}
        height={boxHeight}
        onWidthChange={setBoxWidth}
        onHeightChange={setBoxHeight}
      />

      <div
        className="min-h-[400px] bg-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-300"
        style={{
          display: 'flex',
          flexDirection: flexProps.direction as any,
          justifyContent: flexProps.justify,
          alignItems: flexProps.align,
          flexWrap: flexProps.wrap,
          gap: `${flexProps.gap.value}${flexProps.gap.unit}`,
        }}
      >
        {Array.from({ length: boxCount }, (_, i) => (
          <FlexBox 
            key={i} 
            number={i + 1} 
            width={boxWidth}
            height={boxHeight}
            content={boxContent}
          />
        ))}
      </div>

      <CodePreview css={generateCss()} />
    </div>
  );
}