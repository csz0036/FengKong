const SCROLL_LIST = [];

let
    clientHeight = 0,
    scrollTop = 0,
    time = Date.now();

const scroll = {
    resetClientHeight() {
        clientHeight = document.documentElement.clientHeight || window.innerHeight;
    },

    addEventListener(params = {}) {
        try {
            const { id, start } = params;
            SCROLL_LIST.push({
                ID:id,
                START:start
            })
        }
        catch(err) {
            console.log('scroll addEventListener', ...arguments, err);
        }
    },

    removeEventListener(id) {
        try {
            SCROLL_LIST[id] && delete SCROLL_LIST[id];
        }
        catch(err) {
            console.log('scroll removeEventListener', id, err);
        }
    },

    throttle(fn, wait) {
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }
};

(function() {
    try {
        window.onresize = scroll.resetClientHeight;
        window.onscroll = scroll.throttle(function() {
            const  _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            SCROLL_LIST.forEach( (val) => {
                if(_scrollTop > val.START){
                    document.getElementById(val.ID).style.transform = 'translate3D(0,0,0)'
                }
            })
            
        }, 30)

        window.ontouchmove = scroll.throttle(function() {
            const
                _scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                direction = scrollTop - _scrollTop > 0 ? 1 : -1,
                scrollBottom = _scrollTop + clientHeight;
                
            scrollTop = _scrollTop;

            Array.from(Object.values(SCROLL_LIST), ({ call }) => {
                call({ scrollTop, scrollBottom, direction });
            });
        }, 30)


        scroll.resetClientHeight()
    }
    catch(err) {
        console.log('scroll init', err);
    }
})();

export default scroll;