export const algorithmData = {
  sorting: {
    bubbleSort: {
      title: 'Bubble Sort',
      description: 'Algoritmo de ordenamiento simple que compara repetidamente pares de elementos adyacentes y los intercambia si están en el orden incorrecto.',
      code: `def bubble_sort(arr):
    n = len(arr)
    # Recorrer todos los elementos del array
    for i in range(n):
        # Los últimos i elementos ya están en su lugar
        for j in range(0, n - i - 1):
            # Comparar elementos adyacentes
            if arr[j] > arr[j + 1]:
                # Intercambiar si están en orden incorrecto
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Ejemplo de uso
array = [64, 34, 25, 12, 22, 11, 90]
print("Array original:", array)
result = bubble_sort(array.copy())
print("Array ordenado:", result)`,
      explanation: [
        'El algoritmo recorre el array múltiples veces',
        'En cada iteración, compara pares de elementos adyacentes',
        'Si un par está en el orden incorrecto, los intercambia',
        'Los elementos más grandes "burbujean" hacia el final',
        'El proceso continúa hasta que el array está completamente ordenado',
      ],
    },
    quickSort: {
      title: 'Quick Sort',
      description: 'Algoritmo de ordenamiento eficiente que utiliza la estrategia divide y conquista, seleccionando un pivote y particionando el array.',
      code: `def quick_sort(arr):
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1
        
        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    def quick_sort_recursive(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quick_sort_recursive(arr, low, pi - 1)
            quick_sort_recursive(arr, pi + 1, high)

    quick_sort_recursive(arr, 0, len(arr) - 1)
    return arr`,
      explanation: [
        'Selecciona un elemento como pivote',
        'Particiona el array en elementos menores y mayores que el pivote',
        'Recursivamente ordena las sub-particiones',
        'Combina los resultados para obtener el array ordenado',
        'Muy eficiente en promedio, pero puede degradarse en el peor caso',
      ],
    },
    mergeSort: {
      title: 'Merge Sort',
      description: 'Algoritmo de ordenamiento estable que divide el array en mitades, las ordena recursivamente y luego las fusiona.',
      code: `def merge_sort(arr):
    # Caso base
    if len(arr) <= 1:
        return arr
    
    # Dividir el array en dos mitades
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    # Fusionar las mitades ordenadas
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    # Comparar elementos de ambas mitades
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Añadir elementos restantes
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Ejemplo de uso
array = [64, 34, 25, 12, 22, 11, 90]
print("Array original:", array)
result = merge_sort(array)
print("Array ordenado:", result)`,
      explanation: [
        'Divide el array en mitades recursivamente',
        'Ordena cada mitad de forma independiente',
        'Fusiona las mitades ordenadas de manera eficiente',
        'Garantiza un rendimiento O(n log n) en todos los casos',
        'Requiere espacio adicional para la fusión',
      ],
    },
    insertionSort: {
      title: 'Insertion Sort',
      description: 'Construye el array ordenado un elemento a la vez, insertando cada nuevo elemento en su posición correcta.',
      code: `def insertion_sort(arr):
    # Comenzar desde el segundo elemento
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        # Mover elementos mayores que key una posición adelante
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        # Insertar key en su posición correcta
        arr[j + 1] = key
    
    return arr

# Ejemplo de uso
array = [64, 34, 25, 12, 22, 11, 90]
print("Array original:", array)
result = insertion_sort(array.copy())
print("Array ordenado:", result)`,
      explanation: [
        'Mantiene una porción ordenada al inicio del array',
        'Toma cada elemento y lo inserta en su posición correcta',
        'Desplaza elementos mayores para hacer espacio',
        'Eficiente para arrays pequeños o casi ordenados',
        'Simple de implementar y entender',
      ],
    },
    selectionSort: {
      title: 'Selection Sort',
      description: 'Encuentra repetidamente el elemento mínimo del array no ordenado y lo coloca al inicio.',
      code: `def selection_sort(arr):
    n = len(arr)
    
    # Recorrer todo el array
    for i in range(n):
        # Encontrar el elemento mínimo en el resto del array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Intercambiar el mínimo encontrado con el primer elemento
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr

# Ejemplo de uso
array = [64, 34, 25, 12, 22, 11, 90]
print("Array original:", array)
result = selection_sort(array.copy())
print("Array ordenado:", result)`,
      explanation: [
        'Divide el array en porción ordenada y no ordenada',
        'Encuentra el elemento mínimo en la porción no ordenada',
        'Lo intercambia con el primer elemento no ordenado',
        'Expande la porción ordenada en cada iteración',
        'Realiza un número mínimo de intercambios',
      ],
    },
  },
  searching: {
    linearSearch: {
      title: 'Búsqueda Lineal',
      description: 'Busca un elemento recorriendo secuencialmente cada elemento del array hasta encontrar el objetivo.',
      code: `def linear_search(arr, target):
    # Recorrer cada elemento del array
    for i in range(len(arr)):
        # Si encontramos el elemento, devolver su índice
        if arr[i] == target:
            return i
    # Si no se encuentra, devolver -1
    return -1

# Ejemplo de uso
array = [64, 34, 25, 12, 22, 11, 90]
target = 22

index = linear_search(array, target)
if index != -1:
    print(f"Elemento {target} encontrado en el índice {index}")
else:
    print(f"Elemento {target} no encontrado")`,
      explanation: [
        'Comienza desde el primer elemento del array',
        'Compara cada elemento con el valor buscado',
        'Retorna el índice cuando encuentra una coincidencia',
        'No requiere que el array esté ordenado',
        'Simple pero ineficiente para arrays grandes',
      ],
    },
    binarySearch: {
      title: 'Búsqueda Binaria',
      description: 'Algoritmo eficiente que divide repetidamente el espacio de búsqueda a la mitad. Requiere un array ordenado.',
      code: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        # Calcular el punto medio
        mid = (left + right) // 2
        
        # Si encontramos el elemento
        if arr[mid] == target:
            return mid
        
        # Si el objetivo es mayor, ignorar mitad izquierda
        elif arr[mid] < target:
            left = mid + 1
        
        # Si el objetivo es menor, ignorar mitad derecha
        else:
            right = mid - 1
    
    # Elemento no encontrado
    return -1

# Ejemplo de uso (el array debe estar ordenado)
array = [11, 12, 22, 25, 34, 64, 90]
target = 25

index = binary_search(array, target)
if index != -1:
    print(f"Elemento {target} encontrado en el índice {index}")
else:
    print(f"Elemento {target} no encontrado")`,
      explanation: [
        'Requiere que el array esté ordenado previamente',
        'Compara el elemento medio con el valor buscado',
        'Descarta la mitad del espacio de búsqueda en cada iteración',
        'Muy eficiente: reduce el problema a la mitad cada vez',
        'Complejidad logarítmica O(log n)',
      ],
    },
  },
};