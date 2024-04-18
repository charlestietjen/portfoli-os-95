import { useState, useEffect } from 'react';
import { MenuList, MenuListItem, Separator, AppBar, Toolbar, Button, Frame } from 'react95';
import logoIMG from '../../assets/img/goblinicon.png';

const Taskbar = () => {
  const [time, setTime] = useState(new Date)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date), 30000)
    return () => clearInterval(interval)
  })
  return (
    <AppBar style={{ position: 'sticky', bottom: '100%' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={logoIMG} alt='gob95 logo' style={{ height: '24px', marginRight: 4 }} />
            Start
          </Button>
          {menuOpen && (
            <MenuList style={{ position: 'absolute', bottom: '50%', left: 0 }}>
              <MenuListItem disabled>Logout</MenuListItem>
            </MenuList>
          )}

        </div>
        <Frame variant='well' style={{ padding: '3px 8px' }}>
          {time.getHours()}:{time.getMinutes()}
        </Frame>
      </Toolbar>
    </AppBar>
  )
}

export default Taskbar