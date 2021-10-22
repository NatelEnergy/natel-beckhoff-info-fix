Fix scrolling on Beckhoff infosys: https://infosys.beckhoff.com/  

The Beckhoff infosys uses a propritary script to control page scrolling.  This breaks on high PPI monitors, and makes scrolling very slow.  The extension adds styles to restore standard page scrolling behavior.  

#### Installation:
- Download or clone repository.
- Visit `chrome://extensions/`
- In the top right, toggle "Developer mode".
- In the top left click "Load unpacked".
- Select the repository folder.
- Done!  Now normal scrolling will be used in the Beckhoff Infosys.
