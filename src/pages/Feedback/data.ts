import withinDietImg from '@assets/congratsImg.png'
import offDietImg from '@assets/shameImg.png'

const withinDietFeedbackData = {
  title: 'Continue assim!',
  subtitle: 'Você continua dentro da dieta. Muito bem!',
  image: withinDietImg,
}

const offDietFeedbackData = {
  title: 'Que pena!',
  subtitle: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
  image: offDietImg,
}

export const feedbackData = {
  withinDiet: withinDietFeedbackData,
  offDiet: offDietFeedbackData,
}
