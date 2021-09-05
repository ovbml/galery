from keyboard import press, write, wait
from time import sleep

images_count = int(input('Pls enter images count: '))
print('Press ctrl+shift to start...')
wait('ctrl+shift')
sleep(1)

for image_index in range(1, images_count + 1):
    press('F2')
    write(str(image_index))
    press('enter')
    press('right')