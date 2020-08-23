import { initNode2SketchSymbol } from '../src';
import { resolve } from 'path';
import { SymbolMaster } from 'html2sketch';

const result = {
  _class: 'symbolMaster',
  allowsOverrides: true,
  backgroundColor: {
    _class: 'color',
    alpha: 1,
    blue: 1,
    green: 1,
    red: 1,
  },
  booleanOperation: -1,
  changeIdentifier: 0,
  do_objectID: '0BCFE026-9023-455F-9AFA-5354A55ED135',
  exportOptions: {
    _class: 'exportOptions',
    exportFormats: [],
    includedLayerIds: [],
    layerOptions: 0,
    shouldTrim: false,
  },
  frame: {
    _class: 'rect',
    constrainProportions: false,
    height: 28,
    width: 58,
    x: 25,
    y: 41,
  },
  groupLayout: {
    _class: 'MSImmutableFreeformGroupLayout',
  },
  hasBackgroundColor: false,
  hasClickThrough: true,
  horizontalRulerData: {
    _class: 'rulerData',
    base: 0,
    guides: [],
  },
  includeBackgroundColorInExport: true,
  includeBackgroundColorInInstance: false,
  includeInCloudUpload: true,
  isFixedToViewport: false,
  isFlippedHorizontal: false,
  isFlippedVertical: false,
  isFlowHome: false,
  isLocked: false,
  isVisible: true,
  layerListExpandedType: 0,
  layers: [
    {
      _class: 'group',
      booleanOperation: -1,
      clippingMaskMode: 0,
      do_objectID: 'E9120A52-BA35-4187-AE1E-9B2971D0AD02',
      exportOptions: {
        _class: 'exportOptions',
        exportFormats: [],
        includedLayerIds: [],
        layerOptions: 0,
        shouldTrim: false,
      },
      frame: {
        _class: 'rect',
        constrainProportions: false,
        height: 28,
        width: 58,
        x: 0,
        y: 0,
      },
      groupLayout: {
        _class: 'MSImmutableFreeformGroupLayout',
      },
      hasClickThrough: false,
      hasClippingMask: false,
      isFixedToViewport: false,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isLocked: false,
      isVisible: true,
      layerListExpandedType: 0,
      layers: [
        {
          _class: 'rectangle',
          booleanOperation: -1,
          clippingMaskMode: 0,
          do_objectID: 'A34572D6-549B-4E62-B503-34E48EE4D849',
          edited: false,
          exportOptions: {
            _class: 'exportOptions',
            exportFormats: [],
            includedLayerIds: [],
            layerOptions: 0,
            shouldTrim: false,
          },
          fixedRadius: 0,
          frame: {
            _class: 'rect',
            constrainProportions: false,
            height: 28,
            width: 58,
            x: 0,
            y: 0,
          },
          hasConvertedToNewRoundCorners: true,
          isClosed: true,
          isFixedToViewport: false,
          isFlippedHorizontal: false,
          isFlippedVertical: false,
          isLocked: false,
          isVisible: true,
          layerListExpandedType: 0,
          name: 'BG',
          nameIsFixed: false,
          needsConvertionToNewRoundCorners: false,
          pointRadiusBehaviour: 1,
          points: [
            {
              _class: 'curvePoint',
              cornerRadius: 0,
              curveFrom: '{0, 0}',
              curveMode: 1,
              curveTo: '{0, 0}',
              hasCurveFrom: false,
              hasCurveTo: false,
              point: '{0, 0}',
            },
            {
              _class: 'curvePoint',
              cornerRadius: 0,
              curveFrom: '{1, 0}',
              curveMode: 1,
              curveTo: '{1, 0}',
              hasCurveFrom: false,
              hasCurveTo: false,
              point: '{1, 0}',
            },
            {
              _class: 'curvePoint',
              cornerRadius: 0,
              curveFrom: '{1, 1}',
              curveMode: 1,
              curveTo: '{1, 1}',
              hasCurveFrom: false,
              hasCurveTo: false,
              point: '{1, 1}',
            },
            {
              _class: 'curvePoint',
              cornerRadius: 0,
              curveFrom: '{0, 1}',
              curveMode: 1,
              curveTo: '{0, 1}',
              hasCurveFrom: false,
              hasCurveTo: false,
              point: '{0, 1}',
            },
          ],
          resizingConstraint: 3,
          resizingType: 0,
          rotation: 0,
          shouldBreakMaskChain: false,
          style: {
            _class: 'style',
            borderOptions: {
              _class: 'borderOptions',
              dashPattern: [],
              isEnabled: true,
              lineCapStyle: 0,
              lineJoinStyle: 0,
            },
            borders: [
              {
                _class: 'border',
                color: {
                  _class: 'color',
                  alpha: 1,
                  blue: 0.4627450980392157,
                  green: 0.4627450980392157,
                  red: 0.4627450980392157,
                },
                contextSettings: {
                  _class: 'graphicsContextSettings',
                  blendMode: 0,
                  opacity: 1,
                },
                fillType: 0,
                isEnabled: true,
                position: 1,
                thickness: 2,
              },
            ],
            colorControls: {
              _class: 'colorControls',
              brightness: 0,
              contrast: 1,
              hue: 0,
              isEnabled: false,
              saturation: 1,
            },
            contextSettings: {
              _class: 'graphicsContextSettings',
              blendMode: 0,
              opacity: 1,
            },
            do_objectID: 'C3243D59-5FC4-44FB-AD7B-BF40BDC12F3D',
            endMarkerType: 0,
            fills: [
              {
                _class: 'fill',
                color: {
                  _class: 'color',
                  alpha: 1,
                  blue: 0.9372549019607843,
                  green: 0.9372549019607843,
                  red: 0.9372549019607843,
                },
                contextSettings: {
                  _class: 'graphicsContextSettings',
                  blendMode: 0,
                  opacity: 1,
                },
                fillType: 0,
                isEnabled: true,
                noiseIndex: 0,
                noiseIntensity: 0,
                patternFillType: 1,
                patternTileScale: 1,
              },
            ],
            innerShadows: [],
            miterLimit: 10,
            shadows: [],
            startMarkerType: 0,
            windingRule: 1,
          },
        },
        {
          _class: 'text',
          attributedString: {
            _class: 'attributedString',
            attributes: [
              {
                _class: 'stringAttribute',
                attributes: {
                  MSAttributedStringColorAttribute: {
                    _class: 'color',
                    alpha: 0.65,
                    blue: 0,
                    green: 0,
                    red: 0,
                  },
                  MSAttributedStringFontAttribute: {
                    _class: 'fontDescriptor',
                    attributes: {
                      name: 'PingFangSC-Regular',
                      size: 14,
                    },
                  },
                  MSAttributedStringTextTransformAttribute: 0,
                  kerning: 0,
                  paragraphStyle: {
                    _class: 'paragraphStyle',
                    alignment: 2,
                    maximumLineHeight: 22.001,
                    minimumLineHeight: 22.001,
                  },
                  strikethroughStyle: 0,
                  underlineStyle: 0,
                },
                length: 3,
                location: 0,
              },
            ],
            string: '折线图',
          },
          automaticallyDrawOnUnderlyingPath: false,
          booleanOperation: -1,
          clippingMaskMode: 0,
          do_objectID: '90D8999B-D2BA-4B66-A6D7-65B6CDECCFB2',
          dontSynchroniseWithSymbol: false,
          exportOptions: {
            _class: 'exportOptions',
            exportFormats: [],
            includedLayerIds: [],
            layerOptions: 0,
            shouldTrim: false,
          },
          frame: {
            _class: 'rect',
            constrainProportions: false,
            height: 22,
            width: 42,
            x: 8,
            y: 1,
          },
          glyphBounds: '',
          hasClippingMask: false,
          isFixedToViewport: false,
          isFlippedHorizontal: false,
          isFlippedVertical: false,
          isLocked: false,
          isVisible: true,
          layerListExpandedType: 0,
          lineSpacingBehaviour: 2,
          name: '文本',
          nameIsFixed: false,
          resizingConstraint: 63,
          resizingType: 0,
          rotation: 0,
          shouldBreakMaskChain: false,
          style: {
            _class: 'style',
            borderOptions: {
              _class: 'borderOptions',
              dashPattern: [],
              isEnabled: true,
              lineCapStyle: 0,
              lineJoinStyle: 0,
            },
            borders: [],
            colorControls: {
              _class: 'colorControls',
              brightness: 0,
              contrast: 1,
              hue: 0,
              isEnabled: false,
              saturation: 1,
            },
            contextSettings: {
              _class: 'graphicsContextSettings',
              blendMode: 0,
              opacity: 1,
            },
            do_objectID: '804CE239-CCFB-41F6-A820-F9BB6092CE85',
            endMarkerType: 0,
            fills: [],
            innerShadows: [],
            miterLimit: 10,
            shadows: [],
            startMarkerType: 0,
            windingRule: 1,
          },
          textBehaviour: 0,
        },
      ],
      name: '按钮',
      nameIsFixed: false,
      resizingConstraint: 63,
      resizingType: 0,
      rotation: 0,
      shouldBreakMaskChain: false,
      style: {
        _class: 'style',
        borderOptions: {
          _class: 'borderOptions',
          dashPattern: [],
          isEnabled: true,
          lineCapStyle: 0,
          lineJoinStyle: 0,
        },
        borders: [],
        colorControls: {
          _class: 'colorControls',
          brightness: 0,
          contrast: 1,
          hue: 0,
          isEnabled: false,
          saturation: 1,
        },
        contextSettings: {
          _class: 'graphicsContextSettings',
          blendMode: 0,
          opacity: 1,
        },
        do_objectID: '4DEDB1C7-B883-4529-913B-E57D2013C143',
        endMarkerType: 0,
        fills: [],
        innerShadows: [],
        miterLimit: 10,
        shadows: [],
        startMarkerType: 0,
        windingRule: 1,
      },
      userInfo: null,
    },
  ],
  name: '',
  nameIsFixed: false,
  overrideProperties: [
    {
      _class: 'MSImmutableOverrideProperty',
      canOverride: true,
      overrideName: '90D8999B-D2BA-4B66-A6D7-65B6CDECCFB2_stringValue',
    },
  ],
  resizesContent: false,
  resizingConstraint: 1,
  resizingType: 1,
  rotation: 0,
  sharedStyleID: '',
  symbolID: '161FA2A2-602F-4CBD-AAE4-0D2803FD5A02',
  verticalRulerData: {
    _class: 'rulerData',
    base: 0,
    guides: [],
  },
};
describe('node2SketchSymbol', function() {
  it('should work well', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/doc'),
      '/_embed_demos/eddb3b71'
    );
    const json = await node2SketchSymbol(
      (document) => document.getElementsByTagName('button')[0]
    );
    expect(json).toBe(result);
  });
  it('能显示浏览器', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/doc'),
      '/_embed_demos/eddb3b71',
      {
        headless: false,
      }
    );
    const json = await node2SketchSymbol(
      (document) => document.getElementsByTagName('button')[0]
    );
    expect(json).toBe(result);
  });
  it('带 layout 解析', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/layout'),
      '/~demos/02af570d',
      {
        headless: false,
        layouts: [],
      }
    );
    const selector = function(document) {
      return document.getElementsByTagName('button')[0];
    };
    const handleSymbol = function(symbol: SymbolMaster) {
      symbol.name = '213';
    };
    const json = await node2SketchSymbol(selector, handleSymbol);
    expect(json).toBe(result);
  });
});
