
/**
 * @typedef {object} TomatoPseudoRamdomColors
 * @property {string} rgb
 * @property {string} color
 */

/**
 * @typedef {object} TomatoGenerationProps
 * @property {number} total_generations
 * @property {Array<number>} last_generation
 * */

/**
 * @param {TomatoProps} props
 * @param {TomatoGenerationProps} generation
 * @return  {TomatoPseudoRamdomColors}*/
function tomato_generate_pseudo_random_colors(props,generation){
    //determine Math seed
    generation.total_generations+=1;

    let red =  tomato_get_rgb_number(props,generation,0);
    let green = tomato_get_rgb_number(props,generation,1);
    let blue =  tomato_get_rgb_number(props,generation,2);

    generation.last_generation = [red,green,blue];

    let color = 'black';
    if(red + green + blue < 300){
        color = 'white';
    }

    return {
        rgb: `rgb(${red},${green},${blue})`,
        color: color
    };
  
}

/**@param {TomatoProps}props
 * @param {TomatoGenerationProps} generation
 * */
function tomato_process_elements(props,generation){

    let all_elements = props.target.querySelectorAll('*');

    all_elements.forEach(element => {
        //set the tomato attribute

        if(element.getAttribute('tomato')){
            return;
        }
        element.setAttribute('tomato', 'true');

        if(element.style){
            let tomato_colors = tomato_generate_pseudo_random_colors(props,generation);
            element.style.backgroundColor = tomato_colors.rgb;
            element.style.color = tomato_colors.color;
        }
    });
}



/**
 * @param {TomatoProps} props
 * */
function tomato_start(props=undefined){

    let formatted_props = tomato_construct_props(props);

    formatted_props.numerical_seed = tomato_create_tomato_num_seed(formatted_props.seed);
    /**@type {TomatoGenerationProps}*/
    let generation_props = {
        total_generations:0,
        last_generation:undefined
    };


    if(!formatted_props.target){
        formatted_props.target = ()=>document.body;
    }



    function internal_starter(){
        tomato_process_elements(formatted_props,generation_props);
        const observer = new MutationObserver( ()=>tomato_process_elements(formatted_props,generation_props));
        const config = { childList: true, subtree: true };
        observer.observe(document.body, config);
    }
    let target = undefined;


    //first we try to executate an normal function
    if(formatted_props.target instanceof  Function) {
        try{
            target= formatted_props.target();
        }
        catch(e){}
    }

    if(target){
        formatted_props.target = target;
    }

    let still_target_a_function = formatted_props.target instanceof  Function;

    if(!still_target_a_function){
        internal_starter();
        return;
    }

    if(still_target_a_function){
        let max_tries = 50;
        let interval = setInterval(()=>{

            try{
                target= formatted_props.target();
            }
            catch(e){
                console.log(e);
                clearInterval(interval);
            }


            if(target){
                formatted_props.target = target;
                internal_starter();
                clearInterval(interval);
            }

            max_tries--;
            if(max_tries < 0){
                clearInterval(interval);
                console.log('Tomato could not find the target element');
            }

        },100);

    }


}
