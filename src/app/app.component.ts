import { Component, ViewChild, ElementRef } from '@angular/core';
import { ITile } from './models/itile';
import { TileComponent } from './components/tile/tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('tile0', { static: true }) tile0: TileComponent;
  @ViewChild('tile1', { static: true }) tile1: TileComponent;
  @ViewChild('tile2', { static: true }) tile2: TileComponent;
  @ViewChild('tile3', { static: true }) tile3: TileComponent;
  @ViewChild('tile4', { static: true }) tile4: TileComponent;
  @ViewChild('tile5', { static: true }) tile5: TileComponent;
  @ViewChild('tile6', { static: true }) tile6: TileComponent;
  @ViewChild('tile7', { static: true }) tile7: TileComponent;
  @ViewChild('tile8', { static: true }) tile8: TileComponent;
  @ViewChild('tile9', { static: true }) tile9: TileComponent;
  @ViewChild('tile10', { static: true }) tile10: TileComponent;
  @ViewChild('tile11', { static: true }) tile11: TileComponent;
  @ViewChild('tile12', { static: true }) tile12: TileComponent;
  @ViewChild('tile13', { static: true }) tile13: TileComponent;
  @ViewChild('tile14', { static: true }) tile14: TileComponent;
  @ViewChild('tile15', { static: true }) tile15: TileComponent;
  @ViewChild('tile16', { static: true }) tile16: TileComponent;
  @ViewChild('tile17', { static: true }) tile17: TileComponent;
  @ViewChild('tile18', { static: true }) tile18: TileComponent;
  @ViewChild('tile19', { static: true }) tile19: TileComponent;
  @ViewChild('tile20', { static: true }) tile20: TileComponent;
  @ViewChild('tile21', { static: true }) tile21: TileComponent;
  @ViewChild('tile22', { static: true }) tile22: TileComponent;
  @ViewChild('tile23', { static: true }) tile23: TileComponent;
  @ViewChild('tile24', { static: true }) tile24: TileComponent;
  @ViewChild('tile25', { static: true }) tile25: TileComponent;
  @ViewChild('tile26', { static: true }) tile26: TileComponent;
  @ViewChild('tile27', { static: true }) tile27: TileComponent;
  @ViewChild('tile28', { static: true }) tile28: TileComponent;
  @ViewChild('tile29', { static: true }) tile29: TileComponent;
  @ViewChild('tile30', { static: true }) tile30: TileComponent;
  @ViewChild('tile31', { static: true }) tile31: TileComponent;
  @ViewChild('tile32', { static: true }) tile32: TileComponent;
  @ViewChild('tile33', { static: true }) tile33: TileComponent;
  @ViewChild('tile34', { static: true }) tile34: TileComponent;
  @ViewChild('tile35', { static: true }) tile35: TileComponent;
  @ViewChild('tile36', { static: true }) tile36: TileComponent;

  title = 'roulette-ng';

  private row1Numbers = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
  private row2Numbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 32, 35];
  private row3Numbers = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  private multiSelectedNumbers = [];

  public selectedNumbers: number[] = [];

  public debugMessage: string;
  public randomNumbers: string;

  onReset(): void {
    this.tile0.reset();
    this.tile1.reset();
    this.tile2.reset();
    this.tile3.reset();
    this.tile4.reset();
    this.tile5.reset();
    this.tile6.reset();
    this.tile7.reset();
    this.tile8.reset();
    this.tile9.reset();
    this.tile10.reset();
    this.tile11.reset();
    this.tile12.reset();
    this.tile13.reset();
    this.tile14.reset();
    this.tile15.reset();
    this.tile16.reset();
    this.tile17.reset();
    this.tile18.reset();
    this.tile19.reset();
    this.tile20.reset();
    this.tile21.reset();
    this.tile22.reset();
    this.tile23.reset();
    this.tile24.reset();
    this.tile25.reset();
    this.tile26.reset();
    this.tile27.reset();
    this.tile28.reset();
    this.tile29.reset();
    this.tile30.reset();
    this.tile31.reset();
    this.tile32.reset();
    this.tile33.reset();
    this.tile34.reset();
    this.tile35.reset();
    this.tile36.reset();

    this.selectedNumbers = [];
    this.randomNumbers = "";
    this.debugMessage = "";
    this.multiSelectedNumbers = [];
  }

  onClicked(event: ITile): void {
    if (event.timesSelected === 0) {
      // do nothing.
    } else if (event.timesSelected === 1) {
      this.selectedNumbers.push(event.faceValue);
    } else if (event.timesSelected === 2) {
      this.multiSelectedNumbers.push(event.faceValue);
    } else {
      // do nothing.
    }
  }

  /**
   * 5 Random numbers have to be generated.
1. At least 3 will be from the random generator and created from numbers not yet drawn.
2. The other 2 (If possible, will be drawn from repeated numbers in the sequence).
3. If there are no repeated numbers, then generate 5 random numbers.
4. If there is 1 then use this and generate 4 random numbers.
5. If there are 2 then use both plus  3 random numbers
6. if there are 3 or more we need to get to two.
I suggest we one of those has been drawn 3 times then leave that out and use the other 2.
If more than two have been drawn 3 times or more then just randomly select 2
I think that will make it easy.
also try and keep to the 2:2:1 rule so not more than 2 selections on 1 line 
   */
  onGenerate(): void {
    const theResult = [];

    const row1Arr = this.row1Numbers.filter(p => !this.selectedNumbers.includes(p));
    const row2Arr = this.row2Numbers.filter(p => !this.selectedNumbers.includes(p));
    const row3Arr = this.row3Numbers.filter(p => !this.selectedNumbers.includes(p));

    const result0 = this.getNonRepeatingRandomValuesFromAnArray(this.multiSelectedNumbers, 2);
    const result1 = this.getNonRepeatingRandomValuesFromAnArray(row1Arr, 2);
    const result2 = this.getNonRepeatingRandomValuesFromAnArray(row2Arr, 2);
    const result3 = this.getNonRepeatingRandomValuesFromAnArray(row3Arr, 2);

    this.debugMessage = `[${result0.join(',')}] - [${result1.join(',')}] - [${result2.join(',')}] - [${result3.join(',')}]`

    // Generate the 5 numbers.
    result0.forEach(element => {
      theResult.push(element);
    });
    theResult.push(result1[0]);
    theResult.push(result2[0]);
    theResult.push(result3[0]);

    if (theResult.length === 3) {
      theResult.push(result2[1]);
      theResult.push(result3[1]);
      // add from row 1 and row 2
    } else if (theResult.length === 4) {
      theResult.push(result1[1]);
    }

    this.randomNumbers = theResult.join(',');
  }

  /**
   * 
   * @param sample an array of items
   * @param count the number of exclusive random items to retrieve.
   */
  getNonRepeatingRandomValuesFromAnArray(sample: any[], count: number) {
    const result = []
    let tmpSample = [...sample];
    for (let i = 0; i < count; i++) {
      let item = tmpSample[Math.floor(Math.random() * tmpSample.length)];
      if (item !== undefined) {
        result.push(item);
      }
      // Remove the item from the list
      const index = tmpSample.indexOf(item);
      if (index >= 0) {
        tmpSample.splice(index, 1);
      }
    }

    return result;
  }
}
