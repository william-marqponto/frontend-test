import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';

import { X } from 'lucide-react';

import './PokemonDialog.css';

import { PokemonInfo } from '../../types.tsx';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

interface PokemonDialogProps {
  name: string;
}

export function PokemonDialog({ name }: PokemonDialogProps) {
  const [data, setData] = useState<PokemonInfo>({
    id: 0,
    name: '',
    sprites: { other: { ['official-artwork']: { front_default: '' } } },
    height: 0,
    weight: 0,
    abilities: [{ ability: { name: '' } }],
    types: [{ type: { name: '' } }],
    stats: [
      {
        base_stat: 0,
        stat: { name: '' },
      },
    ],
  });

  const handleSearch = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();

    setData(result);
  };

  return (
    <Dialog>
      <DialogTrigger
        className='DialogTrigger'
        onClick={() => {
          handleSearch(name);
        }}>
        <div key={name} className='Box'>
          <div>{name.replace(/[-]/g, ' ')}</div>
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className='DialogOverlay' />
        <DialogContent className='DialogContent' key={data.id}>
          <DialogTitle className='DialogTitle'>
            {data.name.replace(/[-]/g, ' ')}
          </DialogTitle>
          <div key={data.name}>
            <div className='PokemonImageInfo'>
              <div className='PokemonImage'>
                <img
                  src={
                    data.sprites.other['official-artwork'].front_default
                      ? data.sprites.other['official-artwork'].front_default
                      : '/image-null.png'
                  }
                  alt={data.name.replace(/[-]/g, ' ')}
                />
              </div>
              <div className='PokemonInfo'>
                <div>
                  <div className='Info'>
                    <b>Height:</b> {data.height / 10}m
                  </div>
                  <div className='Info'>
                    <b>Weight:</b> {data.weight / 10}kg
                  </div>
                </div>
                <div>
                  <div className='PokemonListInfo Info'>
                    <b>Abilities:</b>
                    <ul>
                      {data.abilities.map((item) => (
                        <li>{item.ability.name.replace(/[-]/g, ' ')}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='PokemonListInfo Info'>
                    <b>Types:</b>
                    <ul>
                      {data.types.map((item) => (
                        <li>{item.type.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id='PokemonStatistic'>
              <ReactEChartsCore
                echarts={echarts}
                option={{
                  grid: {
                    left: '5%',
                    right: '10%',
                    bottom: '5%',
                    top: '5%',
                    containLabel: true,
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow',
                    },
                  },
                  xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                  },
                  yAxis: {
                    type: 'category',
                    data: data.stats.map((item) =>
                      item.stat.name.replace(/[-]/g, ' ')
                    ),
                  },
                  series: [
                    {
                      type: 'bar',
                      data: data.stats.map((item) => item.base_stat),
                      itemStyle: {
                        color: '#ffcd37b3',
                      },
                    },
                  ],
                }}
              />
            </div>
          </div>
          <DialogClose className='IconButton' aria-label='Close'>
            <X />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
