function unpackGiftbox(giftBox, wish) {
    for(let i=0; i<giftBox.length; i++) {
      if(giftBox[i] === wish) { // exit 
        return true
      } else {
        if(Array.isArray(giftBox[i])) {
          const gifts = unpackGiftbox(giftBox[i], wish)
          if(gifts === true) {
            return true
          }
        }
      }
    }
    return false
  }
  // 재귀는 브레이크 걸어주는게 있어야함.!!