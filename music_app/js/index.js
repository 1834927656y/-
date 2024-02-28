//jquery的核心思想：选择器 选中元素 绑定事件
$(function(){

    //创建音频播放器对象(并包装为jquery对象)
    const player = $('<audio>')
    //服务端歌曲列表接口地址
    const musicListAPI = 'http://home.softeem.xin:8088/music/listAll'
    //初始化歌曲数组
    let musics = []
    //初始化当前播放的歌曲索引
    let currentIndex = 0

    let m = musics[currentIndex]
    

    //选中指定类名的元素并绑定点击事件
    $('.btn-list').on('click',function(){
        //显示歌曲列表
        $('#music-list-dialog').fadeIn(500)
    })

    $('#btn-close').click(function(){
        $('#music-list-dialog').fadeOut(500)
    })

    //ajax技术（异步请求）
    $.get(musicListAPI,function(data){
         //将从服务端获取的数组缓存到变量中
         musics = data
         //循环遍历数组
         $.each(musics,(i,e)=>{
            $('#music-list').append(`<li data-index="${i}">${e.name}</li>`)
         }) 
         console.log(musics);
         let m = musics[currentIndex]
         console.log(m);
         console.log(m.path);
         $('.music-name').text(m.name)
         player.prop('src',m.path)
    })

    //为歌曲列表项绑定点击事件，实现歌曲播放
    //事件委派（委托）
    $('#music-list').on('click','li',function(){
        //获取li元素上的data-index属性
        currentIndex = $(this).data('index')
        console.log(currentIndex);
        console.log(musics[currentIndex].name);
        $('.music-name').text(musics[currentIndex].name)
        $('.cover').css("animation-play-state","running");
        $('#music-list li').css("color","#ccc");
        $(this).css("color","red");
        $('.btn-play-pause i')[0].classList.replace('fa-play','fa-pause')
        // $('ylhred').classList.remove('ylhred')
        //获取需要播放的歌曲对象
        let m = musics[currentIndex]
        //为播放器设置播放源
        player.prop('src',m.path)
        //主动触发play函数
        player.trigger('play');
    })    

    $('.music-name').text()
    $('.btn-play-pause').on('click',function(){
                if($('.btn-play-pause i')[0].classList[1] === 'fa-play'){
                    $('.cover').css("animation-play-state","running");
                    $('.btn-play-pause i')[0].classList.replace('fa-play','fa-pause')
                    player.trigger('play');
                }
                else{
                    $('.cover').css("animation-play-state","paused");
                    $('.btn-play-pause i')[0].classList.replace('fa-pause','fa-play')
                    player.trigger('pause');
                }
            })
    //封装一个公共函数,实现歌曲播放信息状态同步显示
    function startPlay(){
        //1.实现唱片旋转       
        //2.在头部显示歌曲名称
        $('.music-name').text(musics[0].name)
        //3.播放按钮切换为暂停
        //4.列表中正在播放的歌曲高亮展示
    }

    //扩展（查看Audio-api）
    //1. 同步动态显示播放时长和当前进度
    //2. 进度条同步显示
        
})

    
