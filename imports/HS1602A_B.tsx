import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VSS"],
  pin2: ["VDD"],
  pin3: ["V0"],
  pin4: ["RS"],
  pin5: ["RW"],
  pin6: ["E"],
  pin7: ["DB0"],
  pin8: ["DB1"],
  pin9: ["DB2"],
  pin10: ["DB3"],
  pin11: ["DB4"],
  pin12: ["DB5"],
  pin13: ["DB6"],
  pin14: ["DB7"],
  pin15: ["LED_POS"],
  pin16: ["LED_NEG"]
} as const

const pinAttributes = {
  pin1: {requiresGround: true},
  pin2: {requiresPower: true}
} as const

export const HS1602A_B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      symbol={
        <symbol>
          <schematicrect schX={-0.1} schY={0.3} width={4.2} height={2.2} strokeWidth={0.02} color="#880000" />
          <schematicrect schX={-0.1} schY={0.5} width={3.8} height={1.4} strokeWidth={0.02} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["VSS"]} direction="down" schX={-1.6} schY={-1.2} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["VDD"]} direction="down" schX={-1.4} schY={-1.2} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["V0"]} direction="down" schX={-1.2} schY={-1.2} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["RS"]} direction="down" schX={-1} schY={-1.2} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["RW"]} direction="down" schX={-0.8} schY={-1.2} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["E"]} direction="down" schX={-0.6} schY={-1.2} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["DB0"]} direction="down" schX={-0.4} schY={-1.2} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["DB1"]} direction="down" schX={-0.2} schY={-1.2} schStemLength={0.4} />
          <port name="pin9" pinNumber={9} aliases={["DB2"]} direction="down" schX={0} schY={-1.2} schStemLength={0.4} />
          <port name="pin10" pinNumber={10} aliases={["DB3"]} direction="down" schX={0.2} schY={-1.2} schStemLength={0.4} />
          <port name="pin11" pinNumber={11} aliases={["DB4"]} direction="down" schX={0.4} schY={-1.2} schStemLength={0.4} />
          <port name="pin12" pinNumber={12} aliases={["DB5"]} direction="down" schX={0.6} schY={-1.2} schStemLength={0.4} />
          <port name="pin13" pinNumber={13} aliases={["DB6"]} direction="down" schX={0.8} schY={-1.2} schStemLength={0.4} />
          <port name="pin14" pinNumber={14} aliases={["DB7"]} direction="down" schX={1} schY={-1.2} schStemLength={0.4} />
          <port name="pin15" pinNumber={15} aliases={["LED_POS"]} direction="down" schX={1.2} schY={-1.2} schStemLength={0.4} />
          <port name="pin16" pinNumber={16} aliases={["LED_NEG"]} direction="down" schX={1.4} schY={-1.2} schStemLength={0.4} />
          <schematictext schX={-0.1} schY={1.6} text="{NAME}" fontSize={0.2} anchor="bottom_center" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C18198249"
  ]
}}
      manufacturerPartNumber="HS1602A-B"
      footprint={<footprint>
        <platedhole  portHints={["pin16"]} pcbX="6.100064mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin15"]} pcbX="3.560064mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin14"]} pcbX="1.020064mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin13"]} pcbX="-1.519936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin12"]} pcbX="-4.059936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="-6.599936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="-9.139936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-11.679936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-14.219936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-16.759936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-19.299936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-21.839936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-24.379936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-26.919936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-29.459936mm" pcbY="15.1250968mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-31.999936mm" pcbY="15.1250968mm" holeWidth="0.999998mm" holeHeight="0.999998mm" outerWidth="1.5999968mm" outerHeight="1.5999968mm" rectPad={true} pcbRotation="0deg" shape="pill" />
<platedhole  pcbX="-37.500052mm" pcbY="15.1250968mm" holeWidth="2.6250138mm" holeHeight="2.5000204mm" outerWidth="3.1999936mm" outerHeight="3.1999936mm" shape="pill" />
<platedhole  pcbX="-37.500052mm" pcbY="-15.8750952mm" holeWidth="2.6250138mm" holeHeight="2.5000204mm" outerWidth="3.1999936mm" outerHeight="3.1999936mm" shape="pill" />
<platedhole  pcbX="37.500052mm" pcbY="15.1250968mm" holeWidth="2.6250138mm" holeHeight="2.5000204mm" outerWidth="3.1999936mm" outerHeight="3.1999936mm" shape="pill" />
<platedhole  pcbX="37.500052mm" pcbY="-15.8750952mm" holeWidth="2.6250138mm" holeHeight="2.5000204mm" outerWidth="3.1999936mm" outerHeight="3.1999936mm" shape="pill" />
<silkscreenpath route={[{"x":-30.988000000000056,"y":9.785000800000034},{"x":31.241999999999962,"y":9.785000800000034},{"x":31.241999999999962,"y":9.277000799999996},{"x":-30.988000000000056,"y":9.277000799999996},{"x":-30.988000000000056,"y":9.785000800000034}]} />
<silkscreenpath route={[{"x":40.131999999999834,"y":17.659000800000058},{"x":40.131999999999834,"y":-18.40899920000004},{"x":-40.13200000000006,"y":-18.40899920000004},{"x":-40.13200000000006,"y":17.659000800000058},{"x":40.131999999999834,"y":17.659000800000058}]} />
<silkscreenpath route={[{"x":34.03599999999983,"y":12.071000799999979},{"x":34.03599999999983,"y":-12.82099919999996},{"x":-34.03600000000006,"y":-12.82099919999996},{"x":-34.03600000000006,"y":12.071000799999979},{"x":34.03599999999983,"y":12.071000799999979}]} />
<silkscreenpath route={[{"x":31.241999999999962,"y":5.721000799999956},{"x":31.241999999999962,"y":-8.248999199999957},{"x":-30.988000000000056,"y":-8.248999199999957},{"x":-30.988000000000056,"y":5.721000799999956},{"x":31.241999999999962,"y":5.721000799999956}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="18.6590008mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-40.249919999999975,"y":17.874964800000043},{"x":40.24991999999975,"y":17.874964800000043},{"x":40.24991999999975,"y":-18.624963200000025},{"x":-40.249919999999975,"y":-18.624963200000025},{"x":-40.249919999999975,"y":17.874964800000043}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18198249.obj?uuid=c9b673d260b34b598dea6176638a5e0a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C18198249.step?uuid=c9b673d260b34b598dea6176638a5e0a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.3749992000000475, z: -10.990006000000001 },
      }}
      {...props}
    />
  )
}